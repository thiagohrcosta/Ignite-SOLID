import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    console.log(user_id);

    const findSelectedUser = this.showUserProfileUseCase.execute({
      user_id: String(user_id),
    });

    if (!findSelectedUser) {
      throw new Error("User not found!");
    }

    return response.json(findSelectedUser);
  }
}

export { ShowUserProfileController };
