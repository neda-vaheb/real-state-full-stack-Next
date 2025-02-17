import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileData, setProfileData, type }) {
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileData[type]];
    list[index] = value;
    setProfileData({ ...profileData, [type]: list });
  };

  const addHandler = () => {
    setProfileData({ ...profileData, [type]: [...profileData[type], ""] });
  };

  const deleteHandler = (index) => {
    const list = [...profileData[type]];
    list.splice(index, 1);
    setProfileData({ ...profileData, [type]: list });
  };

  return (
    <div className="mb-[40px]">
      <p className="mb-[15px] text-[1.1rem]">{title}</p>
      {profileData[type].map((i, index) => (
        <div className="flex flex-row my-[10px]" key={index}>
          <input
            className="w-[300px] border border-dashed border-primary text-gray-500 rounded-[5px] p-[10px] text-base h-[30px] ml-[10px] focus:border focus:border-solid focus:border-primary focus:outline-none"
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button
            className="m-0 p-[5px] rounded-[3px] text-[#db0505] bg-white border border-solid border-[#db0505] flex items-center leading-[10px] hover:scale-[1.05] transition-all"
            onClick={() => deleteHandler(index)}
          >
            حذف
            <AiOutlineDelete />
          </button>
        </div>
      ))}
      <button
        className="border-none bg-primary text-white text-base rounded-[5px] transition-all ease-in duration-100 cursor-pointer px-[8px] py-[4px] flex mt-[20px] hover:scale-[1.05] "
        onClick={addHandler}
      >
        افزودن
        <MdOutlineLibraryAdd className="mr-[5px] text-[1.2]" />
      </button>
    </div>
  );
}

export default TextList;
