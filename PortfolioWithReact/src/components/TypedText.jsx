import { useEffect, useRef } from "react";
import Typed from "typed.js";

function TypedText() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "function greet() { return 'Hello'; }",
        "const skills = ['HTML', 'CSS', 'React'];",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    });

    return () => typed.destroy(); // cleanup
  }, []);

  return <span ref={el} />;
}

export default TypedText;
