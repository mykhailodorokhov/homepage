import { useEffect } from "react";

function RedirectToPythonCourse() {
  useEffect(() => {
    window.location.replace("https://python-course.notion.site/");
  }, []);
  return null;
}

export default RedirectToPythonCourse;