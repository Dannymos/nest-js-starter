import { Inject, Injectable } from '@nestjs/common';
import { Connection, getRepository } from 'typeorm';
import * as path from 'path';
import { Builder, fixturesIterator, Loader, Parser, Resolver } from 'typeorm-fixtures-cli/dist';


@Injectable()
export class TestUtilities {

    @Inject(Connection)
    connection: Connection;

    constructor() {
        if (process.env.NODE_ENV !== 'test') {
            throw new Error('UTILS-CALLED-OUTSIDE-TEST-ERROR');
        }
    }

    async resetDatabase() {
        return await this.connection.synchronize(true);
    }

    async loadFixtures() {
        await this.resetDatabase();

        const loader = new Loader();
        loader.load(path.resolve('./test/e2e/utilities/fixtures'));

        const resolver = new Resolver();
        const fixtures = resolver.resolve(loader.fixtureConfigs);
        const builder = new Builder(this.connection, new Parser());

        for (const fixture of fixturesIterator(fixtures)) {
            const entity = await builder.build(fixture);
            await getRepository(entity.constructor.name).save(entity);
        }
    }
}