import DashoardCard from "@/module/DashoardCard";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className="bg-red-500/10 text-red-500 text-lg px-4 py-3 rounded-lg">
          هیچ آگهی ثبت نشده است
        </p>
      )}

      {profiles.map((i) => (
        <DashoardCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
      ))}
    </div>
  );
}

export default MyProfilesPage;
