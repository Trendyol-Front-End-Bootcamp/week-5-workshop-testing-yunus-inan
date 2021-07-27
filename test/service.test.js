

import { ProductProvider } from "../src/service";
import axios from "axios";
import { expect, it, jest } from "@jest/globals";

jest.mock('axios');
describe('axios tests with mocking', () => {


    it('should fetch posts', async () => {
        axios.get.mockResolvedValue({
            data: [
                {
                    "userId": 1,
                    "id": 2,
                    "title": "qui est esse",
                    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n qui aperiam non debitis possimus qui neque nisi nulla"
                }
            ]
        });

        expect(ProductProvider()).resolves.toEqual({
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n qui aperiam non debitis possimus qui neque nisi nulla"
        });

    });
    it('fetches erroneously data from an API', async () => {
        axios.get.mockRejectedValue('Network Error');
        const errorMessage = 'Network Error';

        expect(ProductProvider()).rejects.toThrow(errorMessage);
    });
});



