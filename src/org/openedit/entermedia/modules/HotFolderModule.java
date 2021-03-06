package org.openedit.entermedia.modules;

import java.util.Collection;
import java.util.List;

import org.openedit.Data;
import org.openedit.data.Searcher;
import org.openedit.entermedia.MediaArchive;
import org.openedit.entermedia.scanner.HotFolderManager;

import com.openedit.WebPageRequest;
import com.openedit.util.PathUtilities;

public class HotFolderModule extends BaseMediaModule
{
	public void loadHotFolders(WebPageRequest inReq)  throws Exception
	{
		MediaArchive archive = getMediaArchive(inReq);		
		Collection folders = getHotFolderManager().loadFolders(archive.getCatalogId());
		inReq.putPageValue("folders", folders);
	}
	
	//TODO:Move to a super class
	public Data loadHotFolder(WebPageRequest inReq)  throws Exception
	{
		MediaArchive archive = getMediaArchive(inReq);
		String id = inReq.getRequestParameter("id");
		if( "new".equals(id ) )
		{
			return null;
		}
		Searcher searcher = getHotFolderManager().getFolderSearcher(archive.getCatalogId());
		Data data = (Data)searcher.searchById(id);
		inReq.putPageValue("data", data);
		return data;
	}	
	public void saveHotFolders(WebPageRequest inReq) throws Exception
	{
		MediaArchive archive = getMediaArchive(inReq);
		
		getHotFolderManager().saveMounts(archive.getCatalogId());
		
	}
	public void removeHotFolder(WebPageRequest inReq) throws Exception
	{
		MediaArchive archive = getMediaArchive(inReq);
		String id = inReq.getRequestParameter("id");
		Searcher searcher = getHotFolderManager().getFolderSearcher(archive.getCatalogId());
		Data data = (Data)searcher.searchById(id);
		searcher.delete(data, inReq.getUser());
		getHotFolderManager().saveMounts(archive.getCatalogId());
		
	}
	public void saveFolder(WebPageRequest inReq) throws Exception
	{
		MediaArchive archive = getMediaArchive(inReq);

		String[] fields = inReq.getRequestParameters("field");
		Searcher searcher = getHotFolderManager().getFolderSearcher(archive.getCatalogId());
		String id = inReq.getRequestParameter("id");
		Data data = null;
		if( id.equals("new") )
		{
			data = searcher.createNewData();
		}
		else
		{
			data = (Data)searcher.searchById(id);
		}
		searcher.updateData(inReq, fields, data);			
		
		//save subfolder with the value of the end of externalpath
		String epath = data.get("externalpath");
		if( epath != null )
		{
			epath = epath.trim();
			epath = epath.replace('\\', '/');
			if( epath.endsWith("/"))
			{
				epath = epath.substring(0,epath.length() - 1);
			}
			String subfolder = PathUtilities.extractDirectoryName(epath + "/junk.html");
			data.setProperty("subfolder", subfolder);
		}
		else
		{
			data.setProperty("subfolder", data.getName());
		}
		
		getHotFolderManager().saveFolder(archive.getCatalogId(),data);
	}
	protected HotFolderManager getHotFolderManager()
	{
		return (HotFolderManager)getModuleManager().getBean("hotFolderManager");
	}
	public void importFolder(WebPageRequest inReq) throws Exception
	{
		MediaArchive archive = getMediaArchive(inReq);

		Data folder = loadHotFolder(inReq);
		List found = getHotFolderManager().importHotFolder(archive,folder);
		inReq.putPageValue("found", found);
		
	}
}
