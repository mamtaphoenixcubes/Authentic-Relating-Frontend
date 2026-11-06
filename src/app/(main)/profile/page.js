'use client';

import ProfilePage from "./ProfilePage";
import Header from "@/app/_components/layout/Header";
export default function Profile() {
    return (
        <div className='p-0 font-sans min-h-screen'>
            <section>
                <ProfilePage />
            </section>
        </div>
    );
}