import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CustomDatePicker({ profileData, setProfileData }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileData({ ...profileData, constructionDate: date });
  };

  return (
    <div className="mb-[60px]">
      <p className="mb-[15px]">تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={profileData.constructionDate}
        onChange={changeHandler}
        calendarPosition="bottom-right"
        inputClass="w-[110px] border border-dashed border-primary text-gray-500 rounded-[5px] p-[10px] text-base h-[30px] ml-[10px] text-center"
      />
    </div>
  );
}

export default CustomDatePicker;
