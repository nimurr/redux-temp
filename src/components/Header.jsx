import { useSelector } from "react-redux";

export default function Header() {
  const { count } = useSelector((state) => state.counter);

  // Calculate how many icons to show based on count
  const numberOfIcons = Math.floor(count / 4);

  return (
    <div>
      <h2>{count}</h2>
      <div>
        {/* Render icons based on the number calculated */}
        {Array.from({ length: numberOfIcons }).map((_, index) => (
          <span key={index}>⭐</span> 
        ))}
        {/* Replace ⭐ with your desired icon */}
      </div>
    </div>
  );
}
