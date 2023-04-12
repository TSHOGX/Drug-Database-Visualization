
export const netData = {

"nodes": [
  {
    "id": "0",
    "info": "test",
    "neighbors": ["1","2"],
    "links": [
      { "source": "0", "target": "1" },
      { "source": "0", "target": "2" },
    ],
    "lineData": [
      { x: '2018', y: 7 },
      { x: '2019', y: 5 },
      { x: '2020', y: 11 },
    ],
    "pieData": {
      "2018": [
        { "id": "Q1", "label": "Q1", "value": 453 },
        { "id": "Q2", "label": "Q2", "value": 222 },
        { "id": "Q3", "label": "Q3", "value": 654 },
        { "id": "Q4", "label": "Q4", "value": 322 },
      ],
    },
  },
  {
    "id": "1",
    "info": "test for two",
    "neighbors": ["0"],
    "links": [
      { "source": "0", "target": "1" },
    ],
    "lineData": [
      { x: '2017', y: 9 },
      { x: '2019', y: 8 },
      { x: '2020', y: 11 },
    ],
    "pieData": {
      "2018": [
        { "id": "Q1", "label": "Q1", "value": 677 },
        { "id": "Q2", "label": "Q2", "value": 455 },
        { "id": "Q3", "label": "Q3", "value": 54333 },
        { "id": "Q4", "label": "Q4", "value": 4763 },
      ],
    },
  },
  {
    "id": "2",
    "info": "test a long term, very long name",
    "neighbors": ["0"],
    "links": [
      { "source": "0", "target": "2" },
    ],
    "lineData": [
      { x: '2018', y: 7 },
      { x: '2019', y: 5 },
      { x: '2022', y: 11 },
    ],
    "pieData": {
      "2018": [
        { "id": "Q1", "label": "Q1", "value": 146 },
        { "id": "Q2", "label": "Q2", "value": 226 },
        { "id": "Q3", "label": "Q3", "value": 543 },
        { "id": "Q4", "label": "Q4", "value": 322 },
      ],
      "2019": [
        { "id": "Q1", "label": "Q1", "value": 333 },
        { "id": "Q2", "label": "Q2", "value": 222 },
        { "id": "Q3", "label": "Q3", "value": 111 },
        { "id": "Q4", "label": "Q4", "value": 342 },
      ],
    },
  },
  {
    "id": "11",
    "neighbors": [],
    "links": [
    ],
    "lineData": [
      { x: '2018', y: 111 },
      { x: '2019', y: 22 },
      { x: '2020', y: 9 },
    ],
    "pieData": {
      "2018": [
        { "id": "Q1", "label": "Q1", "value": 899 },
        { "id": "Q2", "label": "Q2", "value": 44 },
        { "id": "Q3", "label": "Q3", "value": 3453 },
        { "id": "Q4", "label": "Q4", "value": 3 },
      ],
    },
  },
],

"links": [
  { "source": "0", "target": "1" },
  { "source": "0", "target": "2" },
]

}