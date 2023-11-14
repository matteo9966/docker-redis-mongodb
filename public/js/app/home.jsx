const removeStyle = window.cssStyleLoader("/js/app/home.style.css");
export const Home = () => {
  React.useEffect(() => {
    return () => removeStyle();
  }, []);
  return <div>hello world</div>;
};
