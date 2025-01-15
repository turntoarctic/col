import { Plus, Settings, ScrollText,ChevronRight } from "lucide-react"; // 使用lucide-react库中的图标
import { ReactNode } from "react";

interface SubItemProps {
  name: string;
  icon?: ReactNode; // 新增icon属性
}

const SubItem = ({ name, icon }: SubItemProps) => {
  return (
    <div className="w-full p-2 flex items-center justify-between bg-transparent hover:bg-gray-100 transition-colors">
      <div className="relative">
        {icon ? (
          <div className="icon-size">{icon}</div>
        ) : (
          <ScrollText className="block icon-size" />
        )}
        <ChevronRight className="hidden hover:block icon-size" />
      </div>
      <div className="flex-grow mx-2 truncate">{name}</div>
      <div className="flex gap-2">
        <Plus className="icon-size" />
        <Settings className="icon-size" />
      </div>
    </div>
  );
};

export default SubItem;
