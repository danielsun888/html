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
                        <Link href="/">index</Link>
                    </li>
                    <li>
                        <Link href="/chart/">Chart
                        </Link>
                    </li>

                </ul>
            </header>

            <main>
                {children} {/* 这里插入特定页面的内容 */}
            </main>
            <footer>
                {/* 在这里放置页脚内容 */} contact us
            </footer>
        </div>
    );
};

export default Layout;
