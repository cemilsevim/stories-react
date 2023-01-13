import { IStoryContext } from '../types';
export declare function useStoriesContext(): IStoryContext;
export declare function usePausableTimeout(callback: () => void, delay: number | null, pause: boolean): void;
export declare function useAnimationFrame(callback: (time: number) => void, start: boolean): void;
export declare function useWindowVisibility(callback: (isVisible: boolean) => void): void;
//# sourceMappingURL=index.d.ts.map