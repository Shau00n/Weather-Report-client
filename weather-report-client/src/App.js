//ライブラリ
import { BrowserRouter, Routes, Route, } from "react-router-dom";
// import { ThemeProvider } from "styled-components";

//css用の定数ファイル読み込み
// import variables from "./Variables4css";

//全てのページコンポーネントを読み込む
// import Auth from "./Auth";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
// import SignUpMailSent from "./pages/signUp/SignUpMailSent";
// import SignUpConfirmed from "./pages/signUp/SignUpConfirmed";

// 主なページ
import Home from "./pages/home/Home";
import City from "./pages/city/City";
import Body from "./pages/body/Body";
import Result from "./pages/result/Result";

// import { createContext, useState } from "react";

// const queryClient = new QueryClient();
// //ログインの状態をグローバルな値で保持

// export const loginContext = createContext(false);

function App() {
	// const [isLoggedIn,setIsloggedIn] = useState(false)
  //   return (
  //       <QueryClientProvider client={queryClient}>
  //           <ThemeProvider theme={variables}>
  //               <loginContext.Provider value={[ isLoggedIn, setIsloggedIn ]}>
                	<BrowserRouter>
	                    <Routes>
	                        <Route path={`/`} element={<Home />} />
	                        <Route path={`city`} element={<City />} />
	                        <Route path={`body`} element={<Body />} />
                          <Route path={`result`} element={<Result />} />
	                        
	                        <Route path={`login`} element={<Login />} />
	                        <Route path={`signup`} element={<SignUp />} />
	                    </Routes>
	                </BrowserRouter>
    //             </loginContext.Provider>
    //         </ThemeProvider>
    //     </QueryClientProvider>
    // );
}

export default App;
