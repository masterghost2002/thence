import RegistrationForm from '../components/get-project/registration-form.form';
export default function GetProjectPage() {
  return (
    <div className="h-full flex items-center justify-center ">
      <div className="w-[588px] flex flex-col gap-[62px] items-center justify-center">
        <div className="flex flex-col gap-[16px] text-center">
          <span className="text-[36px] text-[#2DA950] font-[400] font-cursive">
            Registration Form
          </span>
          <p
            className="text-[56px] font-[600] leading-[66px]"
            style={{ letterSpacing: '-2px' }}
          >
            Start your success Journey here!
          </p>
        </div>
        <RegistrationForm />
      </div>
    </div>
  );
}
