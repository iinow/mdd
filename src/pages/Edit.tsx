import React, { useState } from 'react'
import '../scss/Edit.scss'
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const Edit: React.FC = () => {
  const [value, setValue] = useState('')
  const handleEditorChange = (e: any) => {
    console.log('Content was updated:', e.target.getContent())
  }

  const showValue = () => {
    console.log(value)
  }
  return (
    <main className="editor">
      <div className="editor-content">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={{
            toolbar: [
              [{ header: '1' }, { header: '2' }, { font: [] }],
              [{ size: [] }],
              ['bold', 'italic', 'underline', 'strike', 'blockquote'],
              [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' }
              ],
              ['link', 'image', 'video'],
              ['clean']
            ]
          }}
        />
        <button className="button" onClick={showValue}>텍스트 보자 </button>
        {/*<Editor
          initialValue="hello react editor world!"
          previewStyle="vertical"
          height="778px"
          initialEditType="markdown"
          useCommandShortcut={true}
        />*/}
      </div>
      {/*<Editor
        initialValue="<p>Initial content</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
        onChange={handleEditorChange}
      />*/}
    </main>
  )
}

export default Edit
