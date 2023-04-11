# Drug Database Visualization


```bash
npm install
npm start
```



## Roadmap 
- [ ] database import ( data structure )
- [x] theme modify 
- [ ] foot bar 
- [ ] side bar 
- [ ] logo 


Net Graph 
- [?] set default color by drug group 
- [x] hover node to change highlight color
- [x] click node to focus
- [ ] canvas size 
- [ ] filter by similarity ( with different highlight )


Search Bar
- [x] list: show drugs with ID in selected list
- [x] selected item -> add to selected list
- [x] delete button -> delete from selected list
- [x] click item -> focus 
- [x] BUG list overflow 


Global State 
- [x] click on list item -> focused drug 
- [x] selected item -> selected drug 
- [ ] line/Bar chart: selected changed from search bar -> change datas 
- [ ] pie chart: focused changed from search bar -> change display drug, one year 
- [x] net graph: focused changed from search bar -> change camera position


## Resources
- [react-force-graph](https://github.com/vasturiano/react-force-graph)
- [dat.gui](https://github.com/dataarts/dat.gui)
- [nivo](https://nivo.rocks/)
