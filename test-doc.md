First Task:
    I have added a 'Node' component, using which nodes with the shape of 'rounded rectangles' can be created. I did this primarily because earlier the nodes were nothing but css-styled 'divs', which I found rather inflexible. Also, I figured it would be easier to work if the nodes were SVGs themselves, for the sake of homogenity as well as the ease with which I would be able to get crucial coordinates. So I looked up the other components, and sort of merged 'BaseEdge' and 'StraightEdge' components to get my 'Node' component. Although this component has its own limitations, notably the shape of the nodes, it facilitates manipulation of important parameters such as height and width of nodes.

    Description:
        <Node x={} y={} height={} width={} name={} />
            x,y -> origin of path
            height, width -> dimensions
            name -> string displayed in the center of the node