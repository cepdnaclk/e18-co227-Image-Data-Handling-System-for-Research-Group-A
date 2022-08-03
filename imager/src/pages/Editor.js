import { useEffect, useRef, useState } from 'react';
import { Annotorious } from '@recogito/annotorious';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

import '@recogito/annotorious/dist/annotorious.min.css';

function Editor() {

  // Ref to the image DOM element
  const imgEl = useRef();

  // The current Annotorious instance
  const [ anno, setAnno ] = useState();

  // Current drawing tool name
  const [ tool, setTool ] = useState('rect');

  // Init Annotorious when the component
  // mounts, and keep the current 'anno'
  // instance in the application state
  useEffect(() => {
    let annotorious = null;

    if (imgEl.current) {
      // Init
      annotorious = new Annotorious({
        image: imgEl.current
      });

      // Attach event handlers here
      annotorious.on('createAnnotation', annotation => {
        console.log('created', annotation);
      });

      annotorious.on('updateAnnotation', (annotation, previous) => {
        console.log('updated', annotation, previous);
      });

      annotorious.on('deleteAnnotation', annotation => {
        console.log('deleted', annotation);
      });
    }

    // Keep current Annotorious instance in state
    setAnno(annotorious);

    // Cleanup: destroy current instance
    return () => annotorious.destroy();
  }, []);

  // Toggles current tool + button label
  const toggleTool = () => {
    if (tool === 'rect') {
      setTool('polygon');
      anno.setDrawingTool('polygon');
    } else {
      setTool('rect');
      anno.setDrawingTool('rect');
    }
  }

  return (
    <div>
    <div id='editordiv'>
      <div>
        <Button className="reqbutton" size="lg" variant="light"
          onClick={toggleTool}>
            { tool === 'rect' ? 'RECTANGLE' : 'POLYGON' }
        </Button>
      </div>

      <img id='editor'
        ref={imgEl} 
        src="assets/images/abstract-19801_1920.jpg" 
        alt="Hallstatt Town Square" />

        
    </div>
    </div>
    
  );
}
export default Editor;