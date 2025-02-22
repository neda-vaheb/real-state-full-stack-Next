import AdminCard from "@/module/AdminCard";

function AdminPage({ profiles }) {
  const newProfiles = JSON.parse(JSON.stringify(profiles));
  console.log(newProfiles);
  return (
    <div>
      <div>
        {newProfiles.length ? null : (
          <p className="bg-[rgba(219, 5, 5, 0.159)] text-red-500 text-[1.03rem] py-[10px] px-[20px] rounded-[10px]">
            هیچ آگهی در انتظار تاییدی وجود ندارد
          </p>
        )}
        {newProfiles.map((i) => (
          <AdminCard key={i._id} data={i} />
        ))}
      </div>
    </div>
  );
}

export default AdminPage;
