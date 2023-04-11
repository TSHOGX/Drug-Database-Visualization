
export const netData = {

"nodes": [
  {
    "id": 0,
    "info": "test",
    "neighbors": [1,2],
    "selected": true,
    "links": [
      {
        "source": 0,
        "target": 1,
      },
      {
        "source": 0,
        "target": 2,
      }
    ]
  },
  {
    "id": 1,
    "info": "test fro 2",
    "neighbors": [0],
    "selected": false,
    "links": [
      {
        "source": 0,
        "target": 1,
      },
    ]
  },
  {
    "id": 2,
    "info": "test a long term, very long name",
    "neighbors": [0],
    "selected": false,
    "links": [
      {
        "source": 0,
        "target": 2,
      },
    ]
  },
  {
    "id": 11,
    "neighbors": [],
    "selected": false,
    "links": [
    ]
  },
],

"links": [
  {
    "source": 0,
    "target": 1,
  },
  {
    "source": 0,
    "target": 2,
  }
]

}