import GirlImage from '../../assets/girl.svg';
import EfficiencyCard from './efficiency-card';
import DemploymentTime from './deployment-time';
import ExpenseEfficiencyCard from './expense-efficiency';
export default function Metric() {
  return (
    <div className="flex relative w-[728px]">
      <img src={GirlImage} className="rounded-[40px] ml-[132px]" />
      <EfficiencyCard />
      <DemploymentTime />
      <ExpenseEfficiencyCard />
    </div>
  );
}
