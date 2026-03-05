import { jest } from '@jest/globals'
import errorHandler from "../../middleware/errorHandler.js";

describe("Error Middleware", () => {

  test("should return 500 error", () => {

    const err = new Error("Test error");

    const req = {};

    const res = {
      statusCode: 500,
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    const next = jest.fn();

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalled();

  });

});