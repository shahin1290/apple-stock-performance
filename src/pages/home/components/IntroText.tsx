const IntroText = () => {
  return (
    <div className="py-20">
      <h1 className="mb-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Apple Stock React To News Articles Count
      </h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
        This app provides a dynamic chart that visually represents the
        relationship between the count of news articles and the stock price for
        Apple. This app uses historical stock data from{" "}
        <span className="font-bold">2023-05-01</span>
        to <span className="font-bold">2023-09-30</span> and new articles for
        the same period.
      </p>
    </div>
  );
};

export default IntroText;
