import ChartBar from './ChartBar';

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div id="chart"  className='bg-[#f8dfff] flex justify-around h-[10rem] p-4 rounded-xl mb-4 text-stone-900'>
      {dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} {...dataPoint} maxValue={totalMaximum} />
      ))}
    </div>
  );
};

export default Chart;
