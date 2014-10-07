Workspace.factory('annotationService', function () {
  var data = [
  {
  project:{
    id: 1,
    name: "Bad Project"
  },
  annotation:{
    id: 101,
    name: "Stupid art",
    description: "This is my fifth child's bad art",
    status: 'Done',
    hasRecentActivity: true,
    createTime: '05/04/2014 14:33:56',
    lastUpdateTime: '05/06/2014 06:30:23',
    owner: 'Bob Dole',
    path: '/emshare/components/annotations/workspace/img/ForMom.jpg'
    }
  },
  {
  project:{
    id: 2,
    name: "Good Project"
  },
  annotation:{
    id: 102,
    name: "Nice art",
    description: "This is my fourth child's good art",
    status: 'Done',
    hasRecentActivity: false,
    createTime: '05/14/2014 14:36:56',
    lastUpdateTime: '06/06/2014 06:30:23',
    owner: 'Bob Dole',
    path: '/emshare/components/annotations/workspace/img/FenceDog.jpg'
    }
  },
  {
  project:{
    id: 3,
    name: "Great Project"
  },
  annotation:{
    id: 103,
    name: "Great art",
    description: "This is my first child's amazing art",
    status: 'Done',
    hasRecentActivity: false,
    createTime: '05/04/1987 14:33:56',
    lastUpdateTime: '05/06/1999 06:30:23',
    owner: 'Bobette Dole',
    path: '/emshare/components/annotations/workspace/img/TigerTug.jpg'
    }
  },
  {
  project:{
    id: 4,
    name: "Unknown Project"
  },
  annotation:{
    id: 104,
    name: "Maybe art",
    description: "This is my second child's interpretive pseudo art project",
    status: 'In Progress',
    hasRecentActivity: true,
    createTime: '01/04/2011 14:33:56',
    lastUpdateTime: '05/14/2014 15:31:23',
    owner: 'Fred Dole',
    path: '/emshare/components/annotations/workspace/img/BlueBus.jpg'
    }
  }
  ]
   
  /* 
  annotationApi.query({}, function(response){
  realData = response
  })
  */
   
  return { 
  mockData: data
  }
})
/* how this is different, I may never know!
// Generated by CoffeeScript 1.4.0

Workspace.factory('annotationService', function() {
  var data;
  data = [
    {
      project: {
        id: 1,
        name: "Bad Project"
      },
      annotation: {
        id: 101,
        name: "Stupid art",
        description: "This is my fifth child's bad art",
        status: 'Done',
        hasRecentActivity: true,
        createTime: '05/04/2014 14:33:56',
        lastUpdateTime: '05/06/2014 06:30:23',
        owner: 'Bob Dole',
        path: '/emshare/components/annotations/workspace/img/ForMom.jpg'
      }
    }, {
      project: {
        id: 2,
        name: "Good Project"
      },
      annotation: {
        id: 102,
        name: "Nice art",
        description: "This is my fourth child's good art",
        status: 'Done',
        hasRecentActivity: false,
        createTime: '05/14/2014 14:36:56',
        lastUpdateTime: '06/06/2014 06:30:23',
        owner: 'Bob Dole',
        path: '/emshare/components/annotations/workspace/img/FenceDog.jpg'
      }
    }, {
      project: {
        id: 3,
        name: "Great Project"
      },
      annotation: {
        id: 103,
        name: "Great art",
        description: "This is my first child's amazing art",
        status: 'Done',
        hasRecentActivity: false,
        createTime: '05/04/1987 14:33:56',
        lastUpdateTime: '05/06/1999 06:30:23',
        owner: 'Bobette Dole',
        path: '/emshare/components/annotations/workspace/img/TigerTug.jpg'
      }
    }, {
      project: {
        id: 4,
        name: "Unknown Project"
      },
      annotation: {
        id: 104,
        name: "Maybe art",
        description: "This is my second child's interpretive pseudo art project",
        status: 'In Progress',
        hasRecentActivity: true,
        createTime: '01/04/2011 14:33:56',
        lastUpdateTime: '05/14/2014 15:31:23',
        owner: 'Fred Dole',
        path: '/emshare/components/annotations/workspace/img/BlueBus.jpg'
      }
    }
  ];
  return {
    mockData: data
  };
});
*/