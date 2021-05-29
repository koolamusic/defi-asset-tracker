import { QueryResolvers } from './type-defs.graphqls';
import { ResolverContext } from './apollo';

const Query: Required<QueryResolvers<ResolverContext>> = {
	viewer(_parent, _args, _context, _info) {
		return { id: String(1), name: 'John Adam', status: 'cached' };
	}
};

export default { Query };
