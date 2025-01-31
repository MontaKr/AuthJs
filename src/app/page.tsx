import { SignOut } from "@/components/sign-out";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth(); // 현재 세션의 인증 상태 확인
  if (!session) {
    redirect("/sign-in"); // 세션이 존재하지 않으면 sign-in 페이지로 이동
  }

  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed in as:</p>
        <p className="font-medium">{session.user.image}</p>
      </div>

      <SignOut />
    </>
  );
};

export default Page;
