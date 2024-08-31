import { useState } from "react";

function useViews(initialView: any) {
    const [view, setView] = useState(initialView);

  function setActiveView(newView: string){
    setView(newView)
  }

  return {view, setActiveView}
}

export default useViews
