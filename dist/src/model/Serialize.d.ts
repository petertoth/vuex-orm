import Record from '../data/Record';
import Model from './Model';
export interface Option {
    relations?: boolean;
}
/**
 * Serialize the given model to attributes. This method will ignore
 * relationships, and it includes the index id. If the record is a derived
 * STI enitity, include type key as well.
 */
export declare function toAttributes(record: Model): Record;
/**
 * Serialize given model POJO.
 */
export declare function toJson(model: Model, option?: Option): Record;
