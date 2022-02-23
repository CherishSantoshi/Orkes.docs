/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
module.exports = {

    docsSidebar: [
        {
            "type": "doc",
            "id": "index", 
            "label": "Docs Home"          },       
        {
            "type": "category",
            "label": "Getting Started",
            "collapsed": false,
        
            "items":[
                {
                "type": "doc",
                "id": "server", 
                "label": "Installing Conductor Locally"
              },
              {
                "type": "doc",
                "id": "running-locally-docker", 
                "label": "Installing via Docker Compose"
              },
              {
                    "type": "doc",
                    "id": "gettingstarted/basicconcepts", 
                    "label": "Basic Concepts"
                  },
                  {
                    "type": "doc",
                    "id": "gettingstarted/client", 
                    "label": "Using the Client"
                  },
                  {
                    "type": "doc",
                    "id": "gettingstarted/startworkflow", 
                    "label": "Start a Workflow"
                  }
            ]

        },

        {
          "type": "category",
          "label": "How-Tos",
          "collapsed": false,
      
          "items":[
          {
            "type": "category",
            "label": "Workflows",
            "collapsed": true,
            "items": [
                {
                    "type": "autogenerated",
                    "dirName": "how-tos/Workflows"}
            ]
        },
        {
            "type": "category",
            "label": "Tasks",
            "collapsed": true,
            "items": [
                {
                    "type": "autogenerated",
                    "dirName": "how-tos/Tasks"}
            
            ]
        },
        {
            "type": "category",
            "label": "Workers",
            "collapsed": true,
            "items": [
                {
                    "type": "autogenerated",
                    "dirName": "how-tos/Workers"}
            ]
        },
        {
            "type": "category",
            "label": "Monitoring",
            "collapsed": true,
            "items": [
                {
                    "type": "autogenerated",
                    "dirName": "how-tos/Monitoring"}
            ]
        }
      ]},  
        {
            "type": "category",
            "label": "Tutorials",
            "collapsed": true,
        
            "items":[
                {
                    "type": "doc",
                    "id":  "labs/beginner",
                    "label": "Beginner"
                  },
                  {
                    "type": "doc",
                    "id":  "labs/running-first-workflow",
                    "label": "Running First Workflow"
                  },
                  {
                    "type": "doc",
                    "id":  "labs/running-first-worker",
                    "label": "Running First Worker"
                  },
                  {
                    "type": "doc",
                    "id":  "labs/eventhandlers",
                    "label": "Events and Event Handlers"
                  },
                  
                  {
                    "type": "doc",
                    "id":  "labs/kitchensink",
                    "label": "Kitchen Sink"
                  }
            ]

        },
        {
            "type": "category",
            "label": "Definitions",
            "collapsed": true,
        
            "items":[
              {
                "type": "doc",
                "id": "architecture", 
                "label": "Architecture"
              },

                {
                    "type": "doc",
                    "id": "configuration/taskdef", 
                    "label": "Task Definition"
                  },
                  {
                    "type": "doc",
                    "id": "configuration/workerdef", 
                    "label": "Worker Definition"
                  },
                  {
                    "type": "doc",
                    "id": "configuration/workflowdef", 
                    "label": "Workflow Definition"
                  },
                  {
                    "type": "doc",
                    "id": "configuration/systask", 
                    "label": "System Tasks"
                  },

  
        {
          "type": "category",
          "label": "System Task Details",
          "collapsed": true,
      
          "items":[
              {
                  "type": "doc",
                  "id": "reference-docs/event-task", 
                  "label": "Event Task"
                },
                {
                  "type": "doc",
                  "id": "reference-docs/http-task", 
                  "label": "HTTP Task"
                },
                {
                  "type": "doc",
                  "id": "reference-docs/inline-task", 
                  "label": "Inline Task"
                },
                {
                  "type": "doc",
                  "id": "reference-docs/json-jq-transform-task", 
                  "label": "JSON JQ TRansform Task"
                },
                {
                  "type": "doc",
                  "id": "reference-docs/kafka-publish-task", 
                  "label": "Kafka Publish Task"
                }
          ]

      },
                  {
                    "type": "doc",
                    "id": "configuration/sysoperator", 
                    "label": "Operator Tasks"
                  },
                  {
                    "type": "category",
                    "label": "Operator Task Details",
                    "collapsed": true,
                
                    "items":[
                        {
                            "type": "doc",
                            "id": "reference-docs/do-while-task", 
                            "label": "Do/While"
                          },
                          {
                            "type": "doc",
                            "id": "reference-docs/dynamic-task", 
                            "label": "Dynamic"
                          },
                          {
                            "type": "doc",
                            "id": "reference-docs/dynamic-fork-task", 
                            "label": "Dynamic Fork"
                          },
                          {
                            "type": "doc",
                            "id": "reference-docs/fork-task", 
                            "label": "Fork"
                          },
                          {
                            "type": "doc",
                            "id": "reference-docs/join-task", 
                            "label": "Join"
                          },                  
                          {
                            "type": "doc",
                            "id": "reference-docs/set-variable-task", 
                            "label": "Set Variable"
                          },
                          {
                            "type": "doc",
                            "id": "reference-docs/sub-workflow-task", 
                            "label": "Sub Workflow"
                          },
                          {
                            "type": "doc",
                            "id": "reference-docs/switch-task", 
                            "label": "Switch"
                          },
                          {
                            "type": "doc",
                            "id": "reference-docs/terminate-task", 
                            "label": "Terminate"
                          },
        
                          {
                            "type": "doc",
                            "id": "reference-docs/wait-task", 
                            "label": "Wait"
                          }
                    ]
        
                },
                  {
                    "type": "doc",
                    "id": "configuration/eventhandlers", 
                    "label": "Event Handlers"
                  },
                  {
                    "type": "doc",
                    "id":  "tasklifecycle", 
                    "label": "Task Lifecycle"
                  },
                  {
                    "type": "doc",
                    "id": "configuration/taskdomains", 
                    "label": "Task Domains"
                  },
                  {
                    "type": "doc",
                    "id": "configuration/isolationgroups", 
                    "label": "Isolation Groups"
                  }
            ]

        },

        {
            "type": "category",
            "label": "Conductor Metrics",
            "collapsed": true,
        
            "items":[
                {
                    "type": "doc",
                    "id": "metrics/server", 
                    "label": "Server Metrics"
                  },
                  {
                    "type": "doc",
                    "id": "metrics/client", 
                    "label": "Client Metrics"
                  }
            ]

        },
        {
          "type": "doc",
          "id": "apispec",
          "label": "API Spec"
        },
        {
            "type": "doc",
            "id": "extend",
            "label": "Extending Conductor"
          },

          {
            "type": "doc",
            "id":  "externalpayloadstorage",
            "label": "External Payload Structure"
          },

        {
            "type": "doc",
            "id":  "bestpractices",
            "label": "Best Practices"
          },
          {
            "type": "doc",
            "id":  "faq",
            "label": "FAQ"
          },
          {
            "type": "doc",
            "id":  "technicaldetails",
            "label": "Techncial Details"
          },
          {
            "type": "doc",
            "id":  "license",
            "label": "Netflix License"
          }
        ],
/*
    howtoSideBar: [
        
        {
            type: 'category',
            label: 'Running in Production',
            collapsed: false,
            items: [
                'how-tos/conductor-configurations',
                'how-tos/scaling-the-system',
                'how-tos/archival-of-workflows',
                'how-tos/configuring-metrics',
            ],
        },
        
    ],
    tutorialsSideBarV2: [
        'introduction',
        {
            type:'category',
            label: "Role Management",
            items: [{
                type: 'autogenerated',
                dirName: 'RoleManagement', // generate sidebar from the docs folder (or versioned_docs/<version>)
            }]
            },
        {
            type:'category',
            label:'Concepts',
            collapsed:false,
            items:[
            //    'getting-started/concepts/concepts-overview',
           //     'getting-started/concepts/workflows',
           //     'getting-started/concepts/tasks-and-workers',
            //    'getting-started/concepts/operators',
            //    'getting-started/concepts/system-tasks',
            ],
        },
        {
            type: 'category',
            label: 'Installation Guide',
            collapsed: false,
            items: [
              //  'getting-started/install/running-locally',
             //   'getting-started/install/running-locally-docker',
            ],
        },
        {
            type: 'category',
            label: 'Running Workflows',
            collapsed: false,
            items: [
                //'getting-started/run/running-first-workflow',
               // 'getting-started/run/running-first-worker',
            ],
        },
    ],
    */
/*
    referenceDocsSideBar: [
        'reference-docs',
        {
            type:'category',
            label:'System Tasks',
            collapsed:false,
            items:[
                'reference-docs/system-tasks/http-task',
                'reference-docs/system-tasks/inline-task',
                'reference-docs/system-tasks/json-jq-transform-task',
                'reference-docs/system-tasks/kafka-publish-task',
                'reference-docs/system-tasks/event-task',
            ],
        },
        {
            type:'category',
            label:'Operators',
            collapsed:false,
            items:[
                'reference-docs/switch-task',
                'reference-docs/do-while-task',
                'reference-docs/fork-task',
                'reference-docs/dynamic-fork-task',
                'reference-docs/join-task',
                'reference-docs/wait-task',
                'reference-docs/dynamic-task',
                'reference-docs/terminate-task',
                'reference-docs/set-variable-task',
                'reference-docs/sub-workflow-task',
            ],
        },
        {
            type:'category',
            label:'Event Task',
            collapsed:false,
            items:[

            ],
        },
    ],
    docsSideBar: [
        'docsIntro',
        {
            type: 'category',
            label: 'System Tasks',
            collapsed: false,
            items: [
                'reference-docs/system-tasks/http-task',
                'reference-docs/system-tasks/inline-task',
                'reference-docs/system-tasks/json-jq-transform-task',
                'reference-docs/system-tasks/kafka-publish-task',
                'reference-docs/system-tasks/event-task',
            ],
        }
    ],

    */
    // needs to be in a versioned sidebar
   /* opensourceSidebar: [
  
        'opensource',

        {
            type: 'category',
            label: 'Open Source Documentation',
            collapsed: false,
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'opensource', // generate sidebar from the docs folder (or versioned_docs/<version>)
                  },
            
            ],
        },
    ],
       */
        mySidebar: [
            {
              type: 'autogenerated',
              dirName: '.', // generate sidebar from the docs folder (or versioned_docs/<version>)
            },
          ],     


    
};
