import React from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css'

const QuillEditor = () => {
    const formats = ['bold', 'italic', 'underline', 'strike'];
    const { quill, quillRef } = useQuill();
    // console.log(quill);    // undefined > Quill Object
    // console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }
    React.useEffect(() => {
        if (quill) {
          quill.on('text-change', (delta, oldDelta, source) => {
            // console.log('Text change!');
            console.log(quill.getText()); // Get text only
          
          });
        }
      }, [quill]);
  return (
    <div>
        <div style={{ width: 500, height: 300 }}>
      <div ref={quillRef} />
    </div>
    </div>
  )
}

export default QuillEditor
