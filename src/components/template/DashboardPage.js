function DashboardPage({ createdAt }) {
  return (
    <div>
      <h3 className="text-[1.5rem] mb-[20px] text-primary">سلام 👋</h3>
      <p className="text-gary-500">
        آگهی های خود را ثبت کنید تا هزاران نفر آن را مشاهده کنند
      </p>
      <div className="mt-[100px] flex flex-row py-[5px] px-[10px] rounded-[5px] bg-primary-light">
        <p className="m-0 ml-[10px]">تاریخ عضویت:</p>
        <span className="text-primary">
          {new Date(createdAt).toLocaleDateString("fa-IR")}
        </span>
      </div>
    </div>
  );
}

export default DashboardPage;
