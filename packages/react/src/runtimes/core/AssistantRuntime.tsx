import type { ModelConfigProvider } from "../../types/ModelConfigTypes";
import type { Unsubscribe } from "../../types/Unsubscribe";
import type { ThreadRuntime } from "./ThreadRuntime";

export type ThreadRuntimeWithSubscribe = {
  readonly thread: ThreadRuntime;
  subscribe: (callback: () => void) => Unsubscribe;
};

export type AssistantRuntime = ThreadRuntimeWithSubscribe & {
  switchToNewThread: () => void;
  /**
   * @deprecated Use `switchToNewThread` instead. This will be removed in 0.6.0.
   */
  switchToThread(threadId: null): void;
  switchToThread(threadId: string): void;
  registerModelConfigProvider: (provider: ModelConfigProvider) => Unsubscribe;
};
