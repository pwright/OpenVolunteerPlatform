/*
 * File generated by Graphback CRUD resolver plugin.
 * Content will be overwritten by Graphback generator.
 * To change implementation please disable generator options and supply your own implementation
 * outside generated file.
 */

export default {
  Volunteer: {
    actions: (parent, args, context) => {
      return context.VolounteerAction.batchLoadData(
        "volounteerId",
        parent.id,
        context
      )
    },
  },

  VolounteerAction: {
    volounteer: (parent, args, context) => {
      return context.Volunteer.findBy({ id: parent.volounteerId }).then(
        (results) => results[0]
      )
    },
    reciever: (parent, args, context) => {
      return context.Reciever.findBy({ id: parent.recieverId }).then(
        (results) => results[0]
      )
    },
  },

  Reciever: {
    actions: (parent, args, context) => {
      return context.VolounteerAction.batchLoadData(
        "recieverId",
        parent.id,
        context
      )
    },
  },

  Query: {
    findDistributionCentres: (parent, args, context) => {
      const { fields, ...page } = args
      return context.DistributionCentre.findBy(fields, page)
    },
    findAllDistributionCentres: (parent, args, context) => {
      return context.DistributionCentre.findAll(args)
    },
    findVolunteers: (parent, args, context) => {
      const { fields, ...page } = args
      return context.Volunteer.findBy(fields, page)
    },
    findAllVolunteers: (parent, args, context) => {
      return context.Volunteer.findAll(args)
    },
    findVolounteerActions: (parent, args, context) => {
      const { fields, ...page } = args
      return context.VolounteerAction.findBy(fields, page)
    },
    findAllVolounteerActions: (parent, args, context) => {
      return context.VolounteerAction.findAll(args)
    },
    findRecievers: (parent, args, context) => {
      const { fields, ...page } = args
      return context.Reciever.findBy(fields, page)
    },
    findAllRecievers: (parent, args, context) => {
      return context.Reciever.findAll(args)
    },
    findTasks: (parent, args, context) => {
      const { fields, ...page } = args
      return context.Task.findBy(fields, page)
    },
    findAllTasks: (parent, args, context) => {
      return context.Task.findAll(args)
    },
  },

  Mutation: {
    createDistributionCentre: (parent, args, context) => {
      return context.DistributionCentre.create(args.input, context)
    },
    updateDistributionCentre: (parent, args, context) => {
      return context.DistributionCentre.update(args.input, context)
    },
    deleteDistributionCentre: (parent, args, context) => {
      return context.DistributionCentre.delete(args.input, context)
    },
    createVolunteer: (parent, args, context) => {
      return context.Volunteer.create(args.input, context)
    },
    updateVolunteer: (parent, args, context) => {
      return context.Volunteer.update(args.input, context)
    },
    deleteVolunteer: (parent, args, context) => {
      return context.Volunteer.delete(args.input, context)
    },
    createVolounteerAction: (parent, args, context) => {
      return context.VolounteerAction.create(args.input, context)
    },
    updateVolounteerAction: (parent, args, context) => {
      return context.VolounteerAction.update(args.input, context)
    },
    deleteVolounteerAction: (parent, args, context) => {
      return context.VolounteerAction.delete(args.input, context)
    },
    createReciever: (parent, args, context) => {
      return context.Reciever.create(args.input, context)
    },
    updateReciever: (parent, args, context) => {
      return context.Reciever.update(args.input, context)
    },
    deleteReciever: (parent, args, context) => {
      return context.Reciever.delete(args.input, context)
    },
    createTask: (parent, args, context) => {
      return context.Task.create(args.input, context)
    },
    updateTask: (parent, args, context) => {
      return context.Task.update(args.input, context)
    },
    deleteTask: (parent, args, context) => {
      return context.Task.delete(args.input, context)
    },
  },

  Subscription: {
    newDistributionCentre: {
      subscribe: (parent, args, context) => {
        return context.DistributionCentre.subscribeToCreate(args, context)
      },
    },
    updatedDistributionCentre: {
      subscribe: (parent, args, context) => {
        return context.DistributionCentre.subscribeToUpdate(args, context)
      },
    },
    deletedDistributionCentre: {
      subscribe: (parent, args, context) => {
        return context.DistributionCentre.subscribeToDelete(args, context)
      },
    },
    newVolunteer: {
      subscribe: (parent, args, context) => {
        return context.Volunteer.subscribeToCreate(args, context)
      },
    },
    updatedVolunteer: {
      subscribe: (parent, args, context) => {
        return context.Volunteer.subscribeToUpdate(args, context)
      },
    },
    deletedVolunteer: {
      subscribe: (parent, args, context) => {
        return context.Volunteer.subscribeToDelete(args, context)
      },
    },
    newVolounteerAction: {
      subscribe: (parent, args, context) => {
        return context.VolounteerAction.subscribeToCreate(args, context)
      },
    },
    updatedVolounteerAction: {
      subscribe: (parent, args, context) => {
        return context.VolounteerAction.subscribeToUpdate(args, context)
      },
    },
    deletedVolounteerAction: {
      subscribe: (parent, args, context) => {
        return context.VolounteerAction.subscribeToDelete(args, context)
      },
    },
    newReciever: {
      subscribe: (parent, args, context) => {
        return context.Reciever.subscribeToCreate(args, context)
      },
    },
    updatedReciever: {
      subscribe: (parent, args, context) => {
        return context.Reciever.subscribeToUpdate(args, context)
      },
    },
    deletedReciever: {
      subscribe: (parent, args, context) => {
        return context.Reciever.subscribeToDelete(args, context)
      },
    },
    newTask: {
      subscribe: (parent, args, context) => {
        return context.Task.subscribeToCreate(args, context)
      },
    },
    updatedTask: {
      subscribe: (parent, args, context) => {
        return context.Task.subscribeToUpdate(args, context)
      },
    },
    deletedTask: {
      subscribe: (parent, args, context) => {
        return context.Task.subscribeToDelete(args, context)
      },
    },
  },
}
