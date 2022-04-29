import React from 'react';
import Task from '@/options/components/Setting/Task';
import ThemeToggleButton from '@/options/components/Setting/ThemeToggleButton';
import WorkInProgress from '@/options/components/Setting/WorkInProgress';

const Setting = () => (
  <div className="flex flex-col items-center overflow-y-scroll">
    <div className="w-[48rem] mt-8 mb-16">
      <WorkInProgress />
      <div className="mt-8">
        <h1 className="text-2xl">Better traQ の設定</h1>
        <div className="flex flex-row items-center mt-4 mb-4 ml-8">
          <span className="mr-4 text-base">テーマ切り替え</span>
          <ThemeToggleButton />
        </div>
      </div>
      <div className="mt-4 mb-4">
        <h1 className="text-2xl">現在のキーバインド一覧</h1>
      </div>
      <div className="mb-4">
        <Task />
      </div>
    </div>
  </div>
);

export default Setting;
