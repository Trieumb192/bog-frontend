import React from "react";
import { Jodit } from "jodit";
import JoditReact from "jodit-react";
import UploadApi from "@/services/common/upload";
import { BASE_URL_CDN } from "@/constants/baseUrl";
import { message } from "antd";
import moment from "moment";
import { BLOG, FORMAT_YEAR_MONTH } from "@/constants/division";
import { fetch } from "umi-request";

class JoditEditor extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      value: this.props.value,
      editorConfig: {
        zIndex: 1,
        autofocus: true,
        tabIndex: 1,

        askBeforePasteHTML: false,
        askBeforePasteFromWord: false,
        defaultActionOnPaste: 'insert_clear_html',

        placeholder: 'NHẬP NỘI DUNG ...',
        beautyHTML: true,
        toolbarButtonSize: "middle",
        //  toolbarAdaptive: true,
        buttons: [
          'source',
          '|', 'bold', 'italic',
          '|', 'ul',
          '|', 'font', 'fontsize', 'brush', 'paragraph',
          '|', 'video', 'table', 'link',
          '|', 'left', 'center', 'right', 'justify',
          '|', 'undo', 'redo',
          '|', 'hr', 'eraser', 'fullsize'
        ],
        extraButtons: ["image"],
        readonly: this.props.disabled
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.disabled !== prevProps.disabled) {
      this.setState({ editorConfig: { ...this.state.editorConfig, readonly: this.props.disabled } })
    }
  }

  componentWillMount() {
    this.uploadImageButton();
  }

  uploadImageButton = () => {
    Jodit.defaultOptions.controls.image = {
      exec: (async (editor) => {
        await this.imageUpload(editor);
      })
    };
  }

  imageUpload = (editor) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async function () {
      const imageFile = input.files[0];
      if (!imageFile) {
        return;
      }

      if (!imageFile.name.match(/\.(jpg|jpeg|png)$/)) {
        return;
      }
      const listString = imageFile.name.split(".");
      const fileName = BLOG +
        moment().format(FORMAT_YEAR_MONTH) + "/" +
        listString[0] + "_" + Date.now() + "." + listString[1];
      UploadApi.uploadImage(fileName).then(response => {
        if (response && response.statusCode === 200) {
          fetch(response.data, {
            method: 'PUT',
            body: imageFile
          }).then(response => {
            this.insertImage(editor, BASE_URL_CDN + fileName.trim().replaceAll(" ", "-"));
            // handle the response
          })
            .catch((e) => {
              console.error(e);
            });
        } else {
          message.error("Lỗi tải ảnh");
        }
      })
    }.bind(this);
  }

  insertImage = (editor, url) => {
    console.log('editor', editor.selection.jodit.createInside.element('img'));
    console.log('url', url);
    const image = editor.selection.jodit.createInside.element('img');
    image.setAttribute('src', url);
    editor.selection.insertNode(image);
  }
  // handleContent = (newContent) => {
  //     this.props.onSelectContent(newContent.target.innerHTML);
  //   }
  render() {
    return (
      <React.Fragment>
        <JoditReact
          value={this.props.value}
          config={this.state.editorConfig}
          onChange={this.props.onChange}
        />
      </React.Fragment>
    )
  }
}

export default JoditEditor;
