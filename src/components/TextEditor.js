import React from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


export default class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        const html = this.props.text || ' ';
        const contentBlock = htmlToDraft(html);

        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            const editorState = EditorState.createWithContent(contentState);
            this.state = {
                editorState,
            };
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });

        let rawContent = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        // debugger
        this.props.handleOnChange(rawContent)
    };

    render() {
        const { editorState } = this.state;
        return (
            <Editor
                editorState={editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                    options:['inline', 'blockType', 'list', 'link', 'image', 'remove', 'history'],
                    inline: {
                        inDropdown: true,
                        options: ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript'],
                    },
                    blockType: {
                        inDropdown: true,
                        options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote'],
                    },
                    list: {
                        inDropdown: true,
                        options: ['unordered', 'ordered', 'indent', 'outdent'],
                    },
                    link: {
                        inDropdown: false,
                        showOpenOptionOnHover: true,
                        defaultTargetOption: '_self',
                        options: ['link', 'unlink'],
                    },
                    image: {
                        urlEnabled: true,
                        uploadEnabled: false,
                        alignmentEnabled: true,
                        previewImage: false,
                        defaultSize: {
                            height: 'auto',
                            width: 'auto',
                        },
                    },
                }}
            />
        );
    }
}
