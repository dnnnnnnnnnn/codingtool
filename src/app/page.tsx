
"use client"

import { useRef } from 'react';
import Grid from './components/grid/grid';
import Top from './components/top/top';
import { EditorView } from '@codemirror/view';
import { undo, redo } from '@codemirror/commands';
import Bottom from './components/bottom/bottom';

export default function EditorContainer() {
  const htmlEditorRef = useRef<EditorView | null>(null);
  const cssEditorRef = useRef<EditorView | null>(null);
  const jsEditorRef = useRef<EditorView | null>(null);

  const handleUndo = () => {
    // Perform undo for the currently focused editor
    if (htmlEditorRef.current) undo(htmlEditorRef.current);
    if (cssEditorRef.current) undo(cssEditorRef.current);
    if (jsEditorRef.current) undo(jsEditorRef.current);
  };

  const handleRedo = () => {
    // Perform redo for the currently focused editor
    if (htmlEditorRef.current) redo(htmlEditorRef.current);
    if (cssEditorRef.current) redo(cssEditorRef.current);
    if (jsEditorRef.current) redo(jsEditorRef.current);
  };

  const handleSave = () => {
    console.log("Save button clicked");
    // Implement save functionality here
  };
  
  return (
    <div>
      <Top onUndo={handleUndo} onRedo={handleRedo} onSave={handleSave} />
      <Grid
        htmlEditorRef={htmlEditorRef}
        cssEditorRef={cssEditorRef}
        jsEditorRef={jsEditorRef}
      />
      <Bottom />
    </div>
  );
}