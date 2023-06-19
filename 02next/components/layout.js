// layout.js

import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                {/* 在这里放置页眉内容 */}
                <ul style={{display:"flex",flexDirection:"row",     justifyContent: "center",
                    alignItems: "center",
                    gap: "50px" // 设置子元素之间的间距
                }}>
                    <li>
                        <Link href="/">Header</Link>
                    </li>


                </ul>
            </header>

            <main>
                {children} {/* 这里插入特定页面的内容 */}
            </main>
            <footer>
                {/* 在这里放置页脚内容 */} Footer
            </footer>
        </div>
    );
};

export default Layout;
