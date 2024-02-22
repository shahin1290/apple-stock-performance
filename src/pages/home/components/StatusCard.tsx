const StatusCard = ({ totalNewsCount }: { totalNewsCount: number }) => {
  return (
    <div className="flex justify-center" data-testid="status-card">
      <div className="block w-[20rem] p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="text-xl font-medium text-gray-700 dark:text-gray-400">
          2023-01-02 to 2023-01-31
        </p>
        <div className="text-2xl mt-4">
          <div>Total News Counts:</div>
          <div className="px-2 font-bold tracking-tight text-gray-900 dark:text-white">
            {totalNewsCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
