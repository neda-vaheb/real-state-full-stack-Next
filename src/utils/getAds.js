export async function getAds(){
    const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://real-state-full-stack-next-vq5t.vercel.app'
  : 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/ads`, {
      cache: "no-store",
    });
    return res.json();
}