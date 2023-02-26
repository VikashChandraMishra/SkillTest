Description 1:

    Added a 'Node' component, using which nodes with the shape of 'rounded rectangles' can be created. I did this primarily because earlier the nodes were nothing but css-styled 'divs', which was rather inflexible. Also, I figured it would be easier to work if the nodes were SVGs themselves, for the sake of homogenity as well as the ease with which I would be able to get crucial coordinates. So I looked up the other components, and sort of merged 'BaseEdge' and 'StraightEdge' components to get my 'Node' component. Although this component has its own limitations, notably the shape of the nodes being essentially fixed, it facilitates manipulation of important parameters such as height and width of nodes.

    Signature:
        <Node x={} y={} height={} width={} name={} />
            x,y -> origin of path
            height, width -> dimensions
            name -> string displayed in the center of the node

Description 2:

    Created an 'OrthogonalEdge' component which generates an orthogonal edge from the source coordinates to the target coordinates. The edges resemble those that are provided in the 'docs'. It uses conditional statements and differences between abscissae and ordinates to determine the path structure.

    Stopped working on it due to its lack of flexiblity. Using it gives bad results mostly as very few cases are covered. 

    Signature:
        <OrthogonalEdge sourceX={} sourceY={} sourceH={} sourceW={} targetX={} targetY={} targetH={} targetW={} />
            sourceX, sourceY -> coordinates on the source node from which the edge is to originate
            targetX, targetY -> coordinates on the target node on which the edge is to end
            sourceH -> height of source node
            sourceW -> width of source node
            targetH -> height of target node
            targetW -> width of target node

Description 3:
    
    Created 'OrthogonalEdgeRouter' component as a replacement for 'OrthogonalEdge' component. It receives an array of path-points as arguments.
    
    The 'buildOrthogonalEdge()' function in the component loops through these points and generates the desired path.

    Signature:
        <OrthogonalEdgeRouter sourceX={} sourceY={} targetX={} targetY={} pathPoints={} />
            sourceX, sourceY -> coordinates of the top left corner of the source node from which the edge is to originate
            targetX, targetY -> coordinates of the top left corner of the target node on which the edge is to end
            Note: The above parameters are not really required. They may be removed during revision.

            pathPoints -> array of points through which the edge is to be drawn

Description 4:

    Created 'OrthogonalConnector' component which contains the code from here:
        https://gist.github.com/jose-mdz/4a8894c152383b9d7a870c24a04447e4
    This code is written based on Dijkstra's algorithm. 

    The component exports a 'connectNodes()' function which uses the static 'route()' function of the 'OrthogonalConnector' class.
    The 'route()' function returns an array of points through which the path is to be drawn.

    The 'connectNodes()' function takes the two nodes(<Node />) that are to be joined as the arguments and passes their props to the 'route()' function.

    Signature:
        connectNodes(nodeA: ReactElement, nodeB: ReactElement)
            nodeA, nodeB -> <Node /> (with props passed)