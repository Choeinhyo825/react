const Auth = ()=>{
    return (
        <div className="relative h-full w-full bg-[url(/images/hero.jpg)] bg-no-repeat bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="Logo" className="h-12"/>
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 w-2/5 max-w-md rounded-md">
                        <h2 className="text-white text-4xl md-8 font-semibold">
                            Sing in
                        </h2>
                        <div className="flex flex-col gap-4">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Auth;