import React, { Component } from "react";
import EmailEditorImporter from "react-email-editor";

import classes from "./EmailEditor.module.css"
import Card from "../../UI/Card/Card";
import Header from "../../Elements/Headerahb/Header";
import Button from "../../UI/Button/Button";

class EmailEditor extends Component {
  render() {
    return (
      <>
        <Header
          parah="Email Creator"
          buttontext="console HTML"
          to="/email-blacklist-and-DNS-checker"
          buttonOnClick={this.exportHtml}
        />
      <Card className={classes.emaileditor}>
          <EmailEditorImporter
            ref={(editor) => (this.editor = editor)}
            minHeight="100%"
          />
        </Card>
      </>
    );
  }

  exportHtml = () => {
    this.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log("exportHtml", html);
    });
  };
}

export default EmailEditor;
