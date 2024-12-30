// src/Tiptap.tsx
import { EditorProvider, FloatingMenu, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "@/styles/markdown.css";
// define your extension array
const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

export default function Note() {
  return (
    <EditorProvider extensions={extensions} content={content}>
      {/* <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
      <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu> */}
    </EditorProvider>
  );
}
