import { EditorProvider } from "@/components/editor/EditorProvider";
import Sidebar from "@/components/editor/Sidebar";
import TopBar from "@/components/editor/TopBar";
import EditorContainer from "@/components/editor/EditorContainer";

export default function Write() {
  return (
    <div>
      <EditorProvider>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <TopBar />
            <EditorContainer />
          </div>
        </div>
      </EditorProvider>
    </div>
  );
}
