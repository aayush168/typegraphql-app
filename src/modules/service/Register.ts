import { Resolver, Mutation, Arg } from "type-graphql";
import { Service } from "../../entity/Service";

@Resolver(Service)
export class ServiceRegisterResolver {
  @Mutation(() => Service)
  async register(
    @Arg("name") name: string,
  ): Promise<Service> {
    const service = await Service.create({
      name
    }).save()
    
    return service
  }
}