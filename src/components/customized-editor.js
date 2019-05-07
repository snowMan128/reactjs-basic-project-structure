import React, {useState, useEffect} from 'react';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import {EditorState, convertToRaw, RichUtils, ContentState} from 'draft-js';
import cx from "classnames"
import htmlToDraft from "html-to-draftjs";

function CustomizedEditor({
                              content = '',
                              onContentChange,
                              placeholder = 'محتوا را اینجا بنویسید...',
                              wrapperClassName,
                              editorClassName,
                          }) {

    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [mainContent, setMainContent] = useState('')

    // this will help to render default content only on mount
    const [isLockDefaultContentRender, lockDefaultContentRender] = useState(false)

    useEffect(() => {

        if (content && !isLockDefaultContentRender) {
            const contentBlock = htmlToDraft(content);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const eState = EditorState.createWithContent(contentState);

                setEditorState(eState)
            }

            lockDefaultContentRender(true)
        }

    }, [content])

    /**
     * Editor state change handler
     * @param eState
     */
    const onEditorStateChange = (eState) => {
        const html = draftToHtml(convertToRaw(eState.getCurrentContent()));

        setMainContent(html);
        setEditorState(eState)

        if (onContentChange) // invoke content change
            onContentChange(html)

    };

    // handling key commands for editor
    function handleKeyCommand(command, editorState) {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    return (
        <div className="CustomizedEditor">
            <Editor
                editorState={editorState}
                wrapperClassName={cx("html-editor-wrapper", wrapperClassName)}
                textAlignment="right"
                placeholder={placeholder}
                textDirectionality="RTL"
                editorClassName={cx("html-editor", editorClassName)}
                handleKeyCommand={handleKeyCommand}
                stripPastedStyles={true}
                onEditorStateChange={onEditorStateChange}/>
        </div>
    )
}

export default CustomizedEditor