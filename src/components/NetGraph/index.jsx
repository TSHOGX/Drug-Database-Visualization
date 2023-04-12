import React from 'react'
import { ForceGraph3D } from 'react-force-graph';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { netData } from "../../data/netData";
// import * as dat from 'dat.gui';

const h = document.body.clientHeight;
const w = document.body.clientWidth;

function genRandomTree(N = 300, reverse = false) {
  return {
    nodes: [...Array(N).keys()].map(i => ({ id: i })),
    links: [...Array(N).keys()]
      .filter(id => id)
      .map(id => ({
        [reverse ? 'target' : 'source']: id,
        [reverse ? 'source' : 'target']: Math.round(Math.random() * (id-1))
      }))
  };
}

const NetGraph = ({ focused, setFocusedNode, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  const [highlightNodes, setHighlightNodes] = React.useState(new Set());
  const [highlightLinks, setHighlightLinks] = React.useState(new Set());
  const [hoverNode, setHoverNode] = React.useState(null);
  const [changed, setChanged] = React.useState(false);
  const fgRef = React.useRef();

  const data = React.useMemo(() => {
    const gData = netData;
    // const gData = genRandomTree();
    // console.log(gData)
    gData.links.forEach(link => {
      const a = gData.nodes[link.source];
      const b = gData.nodes[link.target];
      !a.neighbors && (a.neighbors = []);
      !b.neighbors && (b.neighbors = []);
      a.neighbors.push(b);
      b.neighbors.push(a);
      !a.links && (a.links = []);
      !b.links && (b.links = []);
      a.links.push(link);
      b.links.push(link);
    });
    return gData;
  }, []);

  const updateHighlight = () => {
    setHighlightNodes(highlightNodes);
    setHighlightLinks(highlightLinks);
  };
  
  const handleNodeHover = node => {
    highlightNodes.clear();
    highlightLinks.clear();
    if (node) {
      highlightNodes.add(node);
      node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
      node.links.forEach(link => highlightLinks.add(link));
    }
    setHoverNode(node || null);
    updateHighlight();
  };

  React.useEffect(() => {
    if (changed) {
      handleChange(focused);
    }
    setChanged(true);
  },[focused])

  const handleChange = (focused) => {
    const node = netData.nodes.find(n => String(n.id) === String(focused));
    const distance = 150;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      2000  // ms transition duration
    );
  };

  const handleClick = React.useCallback(node => {
    const distance = 150;
    const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt ({ x, y, z })
      2000  // ms transition duration
    );
  }, [fgRef]);


  return (
    <ForceGraph3D 
      graphData={data}
      width={0.4*w}
      height={0.7*h}
      backgroundColor={colors.primary[400]}

      nodeLabel={node => node.id + ": " + node.info}
      
      // link style
      linkDirectionalParticles={2}
      linkWidth={link => highlightLinks.has(link) ? 1 : 1}
      linkDirectionalParticleWidth={link => highlightLinks.has(link) ? 2 : 1}
      linkColor={link => highlightLinks.has(link) ? colors.grey[100] : colors.grey[200]}
      
      // node style 
      nodeRelSize={2}
      nodeColor={node => highlightNodes.has(node) ? colors.blueAccent[400] : colors.greenAccent[500]}
      onNodeHover={handleNodeHover}
      
      // ref 
      ref={fgRef}
      onNodeClick={handleClick}
    />
  )
}

export default NetGraph