import { useEffect, useState, type FC } from "react";

const Greeting: FC = () => {
  const [hour, setHour] = useState<number>(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
    }, 60000); //هر 1 دقیقه آپدیت
    return () => clearInterval(interval);
  }, []);

  const getGreeting = (): string => {
    if (hour >= 0 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 18) return "Good Evening";
    return "Good Night";
  };
  return (
    <>
      <h2>{getGreeting()}</h2>
    </>
  );
};

export default Greeting;
